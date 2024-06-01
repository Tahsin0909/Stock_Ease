import { useQuery } from "@tanstack/react-query";

const useActiveOrder = () => {
    const { isLoading, data: activeOrderData, refetch: orderRefetch } = useQuery({
        queryKey: ['activeOrder'],
        queryFn: async () => {
            const response = await fetch('/activeOrder.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const fetchedData = await response.json();
            // console.log(fetchedData);

            const getNewProducts =await localStorage.getItem('newProducts');
            const newProducts = JSON.parse(getNewProducts);

            if (newProducts) {
                const newData = [...fetchedData, newProducts];
                // console.log(newData);
                return newData
            }
            return fetchedData;

        }
    });

    return [activeOrderData, isLoading, orderRefetch];
};

export default useActiveOrder;
