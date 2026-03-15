import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BriefcaseBusiness, DollarSign } from "lucide-react"

export default function ProjectTab() {
  return (
    <Tabs defaultValue="personal">
      <TabsList className="self-center rounded-sm mt-2" >
        <TabsTrigger value="personal" className="rounded-sm">
          <BriefcaseBusiness />
          Personal
        </TabsTrigger>
        <TabsTrigger value="client" className="rounded-sm">
          <DollarSign />
          Client
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
