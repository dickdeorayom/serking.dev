import Link from "next/link";
import ThemeToggler from "../ThemeToggler";
import MenuToggler from "../MenuToggler";
import Avatar from "../Avatar";

const Header = () => {
    return (
        <>
            <header className="mb-12 flex items-center justify-between tracking-tight">
                <nav className="hidden md:flex flex-row space-x-6 pr-10">
                    <Link href="/">
                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                            home
                        </p>
                    </Link>
                    <Link href="/work">
                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                            work
                        </p>
                    </Link>
                    <Link href="/about">
                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                            about
                        </p>
                    </Link>
                    <Link href="/blog">
                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                            blog
                        </p>
                    </Link>
                    <Link href="/guestbook">
                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                            guestbook
                        </p>
                    </Link>
                </nav>
                <Avatar />
                <div className="flex gap-x-2.5">
                    <MenuToggler />
                    <ThemeToggler />
                </div>
            </header>
            <div
                class="p-4 mb-10 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                role="alert"
            >
                <span class="font-bold">Notice!</span> This website is still
                under development. Just a heads-up for any underdeveloped
                sections you might notice.
            </div>
            {/* <div
                class="p-4 mb-10 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                role="alert"
            >
                <span class="font-bold">Notice!</span> This website is still
                under development. Just a heads-up for any underdeveloped
                sections you might notice.
            </div> */}
        </>
    );
};

export default Header;
