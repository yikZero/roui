import { render } from "@testing-library/react"
import { describe, it, expect, beforeAll } from "vitest"

// Polyfill ResizeObserver for jsdom (required by input-otp)
beforeAll(() => {
  if (typeof globalThis.ResizeObserver === "undefined") {
    globalThis.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver
  }
})

// Accordion
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

// Alert Dialog
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogMedia,
} from "@/components/ui/alert-dialog"

// Alert
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert"

// AspectRatio
import { AspectRatio } from "@/components/ui/aspect-ratio"

// Avatar
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

// Badge
import { Badge } from "@/components/ui/badge"

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"

// Button Group
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

// Button
import { Button } from "@/components/ui/button"

// Card
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

// Checkbox
import { Checkbox } from "@/components/ui/checkbox"

// Collapsible
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"

// Context Menu
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu"

// Dialog
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

// Drawer
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"

// Dropdown Menu
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Empty
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty"

// Field
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"

// Hover Card
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card"

// Input Group
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"

// Input OTP
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"

// Input
import { Input } from "@/components/ui/input"

// Item
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item"

// Kbd
import { Kbd, KbdGroup } from "@/components/ui/kbd"

// Label
import { Label } from "@/components/ui/label"

// Menubar
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"

// Native Select
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/components/ui/native-select"

// Navigation Menu
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

// Pagination
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"

// Popover
import { Popover, PopoverTrigger } from "@/components/ui/popover"

// Progress
import { Progress } from "@/components/ui/progress"

// Radio Group
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Resizable: skipped — react-resizable-panels requires browser APIs not available in jsdom

// Scroll Area
import { ScrollArea } from "@/components/ui/scroll-area"

// Select
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@/components/ui/select"

// Separator
import { Separator } from "@/components/ui/separator"

// Sheet
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

// Skeleton
import { Skeleton } from "@/components/ui/skeleton"

// Slider
import { Slider } from "@/components/ui/slider"

// Spinner
import { Spinner } from "@/components/ui/spinner"

// Switch
import { Switch } from "@/components/ui/switch"

// Table
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"

// Tabs
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Textarea
import { Textarea } from "@/components/ui/textarea"

// Toggle Group
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

// Toggle
import { Toggle } from "@/components/ui/toggle"

// Tooltip
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"

// --- Skipped components ---
// Sonner: requires external toast provider setup
// Chart: requires complex recharts configuration
// Calendar: requires date-picker complex setup
// Carousel: requires embla-carousel complex setup
// Sidebar: requires SidebarProvider context and complex layout
// Command: requires cmdk complex setup
// Combobox: requires complex setup with external state management
// Direction: re-exports from @base-ui/react, not a renderable component
// Resizable: react-resizable-panels uses browser APIs not available in jsdom

describe("Accordion", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("AlertDialog", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
      </AlertDialog>
    )
    expect(container).toBeInTheDocument()
  })

  it("renders content when open", () => {
    const { container } = render(
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>Icon</AlertDialogMedia>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Alert", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
        <AlertAction>Action</AlertAction>
      </Alert>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("AspectRatio", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Avatar", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="" alt="avatar" />
        <AvatarFallback>AB</AvatarFallback>
        <AvatarBadge />
      </Avatar>
    )
    expect(container).toBeInTheDocument()
  })

  it("renders AvatarGroup without crashing", () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Badge", () => {
  it("renders without crashing", () => {
    const { container } = render(<Badge>Badge</Badge>)
    expect(container).toBeInTheDocument()
  })
})

describe("Breadcrumb", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("ButtonGroup", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ButtonGroup>
        <Button>One</Button>
        <ButtonGroupSeparator />
        <Button>Two</Button>
        <ButtonGroupText>Text</ButtonGroupText>
      </ButtonGroup>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Button", () => {
  it("renders without crashing", () => {
    const { container } = render(<Button>Click me</Button>)
    expect(container).toBeInTheDocument()
  })
})

describe("Card", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
          <CardAction>Action</CardAction>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Checkbox", () => {
  it("renders without crashing", () => {
    const { container } = render(<Checkbox />)
    expect(container).toBeInTheDocument()
  })
})

describe("Collapsible", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("ContextMenu", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ContextMenu>
        <ContextMenuTrigger>Right click me</ContextMenuTrigger>
      </ContextMenu>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Dialog", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
      </Dialog>
    )
    expect(container).toBeInTheDocument()
  })

  it("renders content when open", () => {
    const { container } = render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Drawer", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("DropdownMenu", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      </DropdownMenu>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Empty", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Empty>
        <EmptyHeader>
          <EmptyMedia>Icon</EmptyMedia>
          <EmptyTitle>No items</EmptyTitle>
          <EmptyDescription>Nothing to show</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>Content</EmptyContent>
      </Empty>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Field", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <FieldSet>
        <FieldLegend>Legend</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel>Label</FieldLabel>
            <FieldContent>
              <FieldTitle>Title</FieldTitle>
              <FieldDescription>Description</FieldDescription>
            </FieldContent>
            <FieldError>Error message</FieldError>
          </Field>
          <FieldSeparator />
        </FieldGroup>
      </FieldSet>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("HoverCard", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
      </HoverCard>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("InputGroup", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Amount" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Go</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    )
    expect(container).toBeInTheDocument()
  })

  it("renders InputGroupTextarea without crashing", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupTextarea placeholder="Message" />
      </InputGroup>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("InputOTP", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Input", () => {
  it("renders without crashing", () => {
    const { container } = render(<Input placeholder="Type here" />)
    expect(container).toBeInTheDocument()
  })
})

describe("Item", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ItemGroup>
        <Item>
          <ItemMedia variant="icon">Icon</ItemMedia>
          <ItemContent>
            <ItemHeader>
              <ItemTitle>Title</ItemTitle>
            </ItemHeader>
            <ItemDescription>Description</ItemDescription>
            <ItemFooter>Footer</ItemFooter>
          </ItemContent>
          <ItemActions>Actions</ItemActions>
        </Item>
        <ItemSeparator />
      </ItemGroup>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Kbd", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Label", () => {
  it("renders without crashing", () => {
    const { container } = render(<Label>Label text</Label>)
    expect(container).toBeInTheDocument()
  })
})

describe("Menubar", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("NativeSelect", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <NativeSelect>
        <NativeSelectOptGroup label="Group">
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("NavigationMenu", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Pagination", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Popover", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
      </Popover>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Progress", () => {
  it("renders without crashing", () => {
    const { container } = render(<Progress value={50} />)
    expect(container).toBeInTheDocument()
  })
})

describe("RadioGroup", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <RadioGroup>
        <RadioGroupItem value="a" />
        <RadioGroupItem value="b" />
      </RadioGroup>
    )
    expect(container).toBeInTheDocument()
  })
})

// Resizable: skipped — react-resizable-panels uses browser APIs not available in jsdom

describe("ScrollArea", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ScrollArea>
        <div>Scrollable content</div>
      </ScrollArea>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Select", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Pick one" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectSeparator />
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Separator", () => {
  it("renders horizontal without crashing", () => {
    const { container } = render(<Separator />)
    expect(container).toBeInTheDocument()
  })

  it("renders vertical without crashing", () => {
    const { container } = render(<Separator orientation="vertical" />)
    expect(container).toBeInTheDocument()
  })
})

describe("Sheet", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
      </Sheet>
    )
    expect(container).toBeInTheDocument()
  })

  it("renders content when open", () => {
    const { container } = render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Skeleton", () => {
  it("renders without crashing", () => {
    const { container } = render(<Skeleton />)
    expect(container).toBeInTheDocument()
  })
})

describe("Slider", () => {
  it("renders without crashing", () => {
    const { container } = render(<Slider defaultValue={[50]} />)
    expect(container).toBeInTheDocument()
  })
})

describe("Spinner", () => {
  it("renders without crashing", () => {
    const { container } = render(<Spinner />)
    expect(container).toBeInTheDocument()
  })
})

describe("Switch", () => {
  it("renders without crashing", () => {
    const { container } = render(<Switch />)
    expect(container).toBeInTheDocument()
  })
})

describe("Table", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Table>
        <TableCaption>Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Tabs", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Textarea", () => {
  it("renders without crashing", () => {
    const { container } = render(<Textarea placeholder="Type here" />)
    expect(container).toBeInTheDocument()
  })
})

describe("ToggleGroup", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ToggleGroup>
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
    )
    expect(container).toBeInTheDocument()
  })
})

describe("Toggle", () => {
  it("renders without crashing", () => {
    const { container } = render(<Toggle>Bold</Toggle>)
    expect(container).toBeInTheDocument()
  })
})

describe("Tooltip", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    )
    expect(container).toBeInTheDocument()
  })
})
