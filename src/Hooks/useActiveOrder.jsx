// import { useQuery } from '@tanstack/react-query';
// import useAxiosPublic from './useAxiosPublic';

// const useClass = () => {
//     const axiosPublic = useAxiosPublic()
//     const { isPending, data, refetch } = useQuery({
//         queryKey: ['classData'],
//         queryFn: async () => {
//             const res = await axiosPublic.get('/class');
//             return res.data;
//         }
//     })
//     return [data, isPending , refetch]
// };

// export default useClass;