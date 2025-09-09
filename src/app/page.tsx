import { Button } from "@/components/ui/button"
const home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center font-mono text-3xl">
      <h1>Welcome to the Home Page</h1>
      <Button className="ml-4" variant="default">
        click me
      </Button>
    </div>
  )
}

export default home