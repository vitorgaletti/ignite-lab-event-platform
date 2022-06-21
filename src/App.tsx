import { gql, useQuery } from '@apollo/client';

const GET_LESSOS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data, loading, error } = useQuery<{ lessons: Lesson[] }>(
    GET_LESSOS_QUERY
  );

  console.log(data);

  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
}

export default App;
