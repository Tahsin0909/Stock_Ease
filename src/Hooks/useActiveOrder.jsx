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

            // get data from local storage 
            const getNewProducts = await localStorage.getItem('newProducts');
            const newProducts = JSON.parse(getNewProducts);
            // get data from local storage 

            // if products found in local storgae 
            if (newProducts) {

                // updated products 
                const newData = [...fetchedData, newProducts];
                return newData
            }
            return fetchedData;

        }
    });

    return [activeOrderData, isLoading, orderRefetch];
};

export default useActiveOrder;
