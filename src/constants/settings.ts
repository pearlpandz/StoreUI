import { ArticleOutlined, PeopleOutline, StorefrontOutlined, SvgIconComponent } from "@mui/icons-material";

export type MenuType = {
    name: string;
    path: string;
    visible: boolean;
    icon: SvgIconComponent
}

export const MENU: MenuType[] = [
    {
        name: 'Users',
        path: '/users',
        visible: true,
        icon: PeopleOutline
    },
    {
        name: 'Products',
        path: '/products',
        visible: true,
        icon: StorefrontOutlined
    },
    {
        name: 'Blogs',
        path: '/blogs',
        visible: true,
        icon: ArticleOutlined
    },
];