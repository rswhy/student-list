import TableStudents from '../components/TableStudents';

function HomePage() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold">STUDENT LIST</h1>    
      <div className="md:flex mt-4 space-x-4 justify-left">
        <TableStudents/>
      </div>
    </div>

  
  );
}

export default HomePage;
