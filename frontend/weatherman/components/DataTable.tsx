type Column = { key: string; label: string }

export function DataTable({columns, rows }:
    { columns: Column[]; rows: Record<string, any>[] })
{
    return (
        <div className="overflow-hidden rounded-lg border border-zinc-200 shadow-sm dark:border-zinc-800">
            <table className="min-w-full text-sm">
                <thead className="bg-zinc-100 dark:bg-zinc-900">
                    <tr>
                        {columns.map(col =>
                            <th key={col.key} className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-200">
                                {col.label}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {rows.map((row, i) => (
                        <tr key={i} className="bg-white even:bg-zinc-50 hover:bg-blue-50 dark:bg-black dark:even:bg-zinc-950 dark:hover:bg-zinc-900">
                            {columns.map(col =>
                                <td key={col.key} className="px-4 py-2 tabular-nums text-zinc-800 dark:text-zinc-300">
                                    {row[col.key]}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
