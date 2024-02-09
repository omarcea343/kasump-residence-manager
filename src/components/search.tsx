import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <Card className="w-[500px] flex-col flex ">
      <CardHeader>
        <CardTitle>Kasump Residence Manager</CardTitle>
        <CardDescription>
          Ingrese el numero de casa para buscar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="number" placeholder="Numero" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Buscar</Button>
      </CardFooter>
    </Card>
  );
}
