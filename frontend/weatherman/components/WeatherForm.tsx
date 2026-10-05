import Form from 'next/form'

export function WeatherForm() {
    return (
        <Form action="" className="flex flex-col gap-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-black">
            <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-1 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    Latitude
                    <input
                        name="longitude"
                        type="number"
                        step="any"
                        min="-180"
                        max="180"
                        required
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 font-normal tabular-nums text-zinc-800 focus:border-blue-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                    />
                </label>
                <label className="flex flex-col gap-1 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                    Longitude
                    <input
                        name="latitude"
                        type="number"
                        step="any"
                        min="-90"
                        max="90"
                        required
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 font-normal tabular-nums text-zinc-800 focus:border-blue-500 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                    />
                </label>
            </div>
            <button
                type="submit"
                className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-blue-50 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
                Submit
            </button>
        </Form>
    )
}
