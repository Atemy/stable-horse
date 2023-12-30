import { FC } from "react";

type Props = {
    title: string;
    withTabs?: boolean;
    className?: string;
    dti?: string;
};

export const TestComponent: FC<Props> = ({ title }) => (
    <div className={`p-4 lg:py-10 w-[100px] h-[100px] bg-red-600`}>
            {title}
    </div>
);