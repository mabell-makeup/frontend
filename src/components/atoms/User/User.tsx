import { useQueryWrapper } from '../../../helper/reactQueryWrapper';

function User() {
  const res = useQueryWrapper<any>('https://jsonplaceholder.typicode.com/users', {
    requestOptions: { method: "GET" },
    queryKey: 'test',
    queryOptions: {staleTime: Infinity}
  });
  if (res.isLoading) return (
    <p>
      loading.....
    </p>
  )

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {res.data && res.data.map((user: { id: any; name: any; }) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;