export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <h2 className="border-2 border-dashed border-black p-4">This is the dashboard layout</h2>
            {children}
            <h2 className="text-3xl font-bold">This is the footer</h2>
        </main>
    )
}