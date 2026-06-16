import { getUserSession } from "@/lib/core/session";
import {
  LayoutSideContentLeft,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Briefcase,
  Person,
  BriefcaseFill,
  FileText,
  GearBranches,
  HouseFill,
  CreditCard,
} from "@gravity-ui/icons";

import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export async function DashboardSidebar() {

  const user = await getUserSession();

  const recruiterNavlinks = [
    { icon: House, href: "/dashboard/recruiter", label: "Home", },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs", },
    { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job", },
    { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile", },
    { icon: Envelope, href: "/dashboard/recruiter/messages", label: "Messages", },
    { icon: Person, href: "/dashboard/recruiter/profile", label: "Profile", },
    { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings", },
  ];

  const seekerNavLinks = [
  { icon: HouseFill, href: "/dashboard/seeker", label: "Dashboard" },
  { icon: Magnifier, href: "/dashboard/seeker/jobs", label: "Find Jobs" },
  { icon: BriefcaseFill, href: "/dashboard/seeker/applications", label: "Applications" },
  { icon: FileText, href: "/dashboard/seeker/resume", label: "My Resume" },
  { icon: CreditCard, href: "/dashboard/seeker/billing", label: "Billing" },
  { icon: GearBranches, href: "/dashboard/seeker/settings", label: "Settings" },
];

const navLinksMap ={
  seeker: seekerNavLinks,
  recruiter:recruiterNavlinks,
}

  const navItems = navLinksMap[user?.role || 'seeker'];

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-default-100"
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      <Drawer>
        <Button className="lg:hidden" variant="flat">
          <LayoutSideContentLeft className="w-5 h-5" />
          Menu
        </Button>

        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />

              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>

              <Drawer.Body>
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}

export default DashboardSidebar;