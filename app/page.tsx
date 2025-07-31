import { Separator } from "@/components/ui/separator"


export default function Page() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Last Page</h1>
      <p className="text-lg text-gray-600 mb-8">Here you can find information about our latest projects and team members.</p>
      <Separator className="my-6" />
    </div>
  );
}