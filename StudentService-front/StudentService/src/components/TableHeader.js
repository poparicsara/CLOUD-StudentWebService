export default function TableHeader({ headers }) {

  return (      
        
    <tr className="bg-stone-900 border-b opacity-90">     
      <th className="p-2 border-r text-xl text-gray-400 font-bold">
          <div className="flex items-center justify-center">
            No.
          </div>
      </th>
      {headers.map((header, i) => (
        <th key={i} className="p-2 border-r text-xl text-gray-400 font-bold" >
          <div className="flex items-center justify-center">
            {header}
          </div>
        </th>
      ))}           
    </tr>
  );
}
