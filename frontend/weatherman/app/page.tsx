import Image from "next/image";
import { DataTable } from "../components/DataTable";
import { WeatherForm } from "../components/WeatherForm";
import { Loading } from "../components/Loading";
import { Suspense } from "react";

const columns = [
  { key: "time", label: "Time" },
  { key: "temp", label: "Temp (°F)" },
];
const rows = [
  { time: "10:00", temp: 72 },
  { time: "11:00", temp: 75 },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-6">
      <p className="flex justify-center text-heading font-bold text-4xl"> Weatherman </p>
      <Suspense fallback={<Loading/>}>
        <DataTable columns={columns} rows={rows}></DataTable>
      </Suspense>
      <WeatherForm/>
    </div>
  );
}
