import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  const usePosts = (userId: number | undefined) => {
    const fetchPosts = () =>
    axios
    .get('https://xxxjsonplaceholder.typicode.com/posts', {
        params: {
            userId
        }
    })
    .then((res) => res.data)

    return useQuery<Post[], Error>({
        queryKey: ["user", userId,  "posts"],
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000,
      });
  }

  export default usePosts;