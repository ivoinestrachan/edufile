import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    Search as SearchIcon,
  } from "lucide-react"

import React from "react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandDialog,
    CommandShortcut,
  } from "@/components/ui/command"

  import { Button } from "@/components/ui/button";
  
  export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
   
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && e.metaKey) {
          setOpen((open) => !open)
        }
      }
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])
   
    return (
      <>
      <Button
				asChild
				variant="secondary"
				onClick={() => setOpen(true)}
				className="w-full pl-4 pr-2 md:w-80"
			>
				<div className="flex flex-row justify-between h-10">
					<div className="flex flex-row gap-2">
						<SearchIcon className="w-4 h-4 my-auto" />
						Search...
					</div>

					<kbd className="hidden sm:block rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm font-semibold">
						⌘ K
					</kbd>
				</div>
			</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => window.location.href = "/"} >Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      </>
    )
  }