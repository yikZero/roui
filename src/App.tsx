import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  InfoIcon,
  ItalicIcon,
  LogOutIcon,
  MailIcon,
  SettingsIcon,
  TriangleAlertIcon,
  UserIcon,
} from "lucide-react"

export function App() {
  const [progress, setProgress] = useState(45)
  const [sliderValue, setSliderValue] = useState<number[]>([50])

  return (
    <TooltipProvider>
      <div className="mx-auto flex min-h-svh max-w-2xl flex-col gap-8 p-8">
        <h1 className="text-xl font-semibold">ROUI Components</h1>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">Button</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">XS</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">Badge</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">Avatar</h2>
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarImage src="https://github.com/yikzero.png" alt="yikzero" />
              <AvatarFallback>YK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/yikzero.png" alt="yikzero" />
              <AvatarFallback>YK</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/yikzero.png" alt="yikzero" />
              <AvatarFallback>YK</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Input, Textarea & Select
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="demo-name">Name</Label>
              <Input id="demo-name" placeholder="Enter your name" />
            </div>
            <div className="grid gap-1.5">
              <Label>Role</Label>
              <Select defaultValue="Developer">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Developer">Developer</SelectItem>
                  <SelectItem value="Designer">Designer</SelectItem>
                  <SelectItem value="Product Manager">
                    Product Manager
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="demo-bio">Bio</Label>
            <Textarea id="demo-bio" placeholder="Tell us about yourself..." />
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Checkbox, Switch & Radio
          </h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" defaultChecked />
              <Label htmlFor="terms">Accept terms</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="notifications" defaultChecked />
              <Label htmlFor="notifications">Notifications</Label>
            </div>
          </div>
          <RadioGroup defaultValue="comfortable" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="r-compact" />
              <Label htmlFor="r-compact">Compact</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="r-comfortable" />
              <Label htmlFor="r-comfortable">Comfortable</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="spacious" id="r-spacious" />
              <Label htmlFor="r-spacious">Spacious</Label>
            </div>
          </RadioGroup>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Toggle & Toggle Group
          </h2>
          <div className="flex items-center gap-3">
            <Toggle aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Separator orientation="vertical" className="h-6" />
            <ToggleGroup defaultValue={["left"]} variant="outline">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeftIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenterIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRightIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Slider & Progress
          </h2>
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <Label>Volume: {sliderValue[0]}%</Label>
              <Slider
                value={sliderValue}
                onValueChange={(val) =>
                  setSliderValue(Array.isArray(val) ? val : [val])
                }
                max={100}
                step={1}
              />
            </div>
            <div className="grid gap-1.5">
              <div className="flex items-center justify-between">
                <Label>Progress</Label>
                <span className="text-xs text-muted-foreground">
                  {progress}%
                </span>
              </div>
              <Progress value={progress} />
              <div className="flex gap-2">
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10
                </Button>
                <Button
                  size="xs"
                  variant="outline"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">Card</h2>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                This is a card description with leading-relaxed for comfortable
                reading experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card content goes here. The card uses shadow-sm combined with
                ring-1 for a clean, non-muddy edge.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">Tabs</h2>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-sm text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-sm text-muted-foreground">
                Change your password and security settings.
              </p>
            </TabsContent>
            <TabsContent value="settings">
              <p className="text-sm text-muted-foreground">
                Configure your application settings.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Accordion
          </h2>
          <Accordion>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Collapsible
          </h2>
          <Collapsible>
            <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
              <ChevronsUpDownIcon /> Toggle items
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <div className="rounded-lg border px-3 py-2 text-sm">
                Item one
              </div>
              <div className="rounded-lg border px-3 py-2 text-sm">
                Item two
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">Alert</h2>
          <Alert>
            <InfoIcon />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <TriangleAlertIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">Table</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV-001</TableCell>
                <TableCell>
                  <Badge variant="secondary">Paid</Badge>
                </TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV-002</TableCell>
                <TableCell>
                  <Badge variant="outline">Pending</Badge>
                </TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV-003</TableCell>
                <TableCell>
                  <Badge variant="destructive">Overdue</Badge>
                </TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Skeleton
          </h2>
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-3 w-[140px]" />
            </div>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Tooltip & Kbd
          </h2>
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline" size="sm" />}>
                Hover me
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Press <Kbd>⌘</Kbd>
              <Kbd>K</Kbd> to search
            </div>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Dialog, AlertDialog, Dropdown & Popover
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="dialog-name">Name</Label>
                    <Input id="dialog-name" defaultValue="Yi K" />
                  </div>
                </div>
                <DialogFooter showCloseButton>
                  <Button>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="outline" />}>
                Alert Dialog
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Dropdown <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <UserIcon /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MailIcon /> Messages
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon /> Settings
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOutIcon /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Popover>
              <PopoverTrigger render={<Button variant="outline" />}>
                Popover
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader>
                  <PopoverTitle>Dimensions</PopoverTitle>
                  <PopoverDescription>
                    Set the dimensions for the layer.
                  </PopoverDescription>
                </PopoverHeader>
                <div className="grid gap-1.5">
                  <Label htmlFor="popover-width">Width</Label>
                  <Input id="popover-width" defaultValue="100%" />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>
      </div>
    </TooltipProvider>
  )
}
