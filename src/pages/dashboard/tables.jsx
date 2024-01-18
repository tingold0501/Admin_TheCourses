import TableRole from "@/component/tables/TableRole";
import TableUser from "@/component/tables/TableUser";

export function Tables() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <TableUser/>
      <TableRole/>
    </div>
  );
}

export default Tables;
