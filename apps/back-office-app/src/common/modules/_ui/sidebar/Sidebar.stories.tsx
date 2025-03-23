import type { Meta } from '@storybook/react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from './Sidebar';
import {
  ArrowRightStartOnRectangleIcon,
  BellIcon,
  Cog8ToothIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const meta: Meta<typeof Sidebar> = {
  title: 'modules/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {},
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const SidebarDefault = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel label="Main Menu" />
          <nav>
            <SidebarMenu>
              <SidebarMenuItem href="/" SvgIcon={Squares2X2Icon} menuName="Home" isCurrentPage={true} />
              <SidebarMenuItem href="/" SvgIcon={ShoppingBagIcon} menuName="Product" />
              <SidebarMenuItem href="/" SvgIcon={UsersIcon} menuName="Customers" />
              <SidebarMenuItem href="/" SvgIcon={PresentationChartLineIcon} menuName="Analytics" />
            </SidebarMenu>
          </nav>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel label="Others" />
          <nav>
            <SidebarMenu>
              <SidebarMenuItem href="/" SvgIcon={BellIcon} menuName="Notifications" />
              <SidebarMenuItem href="/" SvgIcon={Cog8ToothIcon} menuName="Settings" />
            </SidebarMenu>
          </nav>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem href="/" SvgIcon={ArrowRightStartOnRectangleIcon} menuName="Logout" />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};
