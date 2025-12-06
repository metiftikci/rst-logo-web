import { type ReactElement } from 'react';
import { IconBrowserMinus, IconX } from '@tabler/icons-react';

import './Window.css';

export interface WindowProps {
    title: string,
    x?: number,
    y?: number,
    children?: ReactElement,
}

export function Window(props: WindowProps) {
    return (
        <div className="rst-window" style={{ left: props.x, top: props.y }}>
            <div className="rst-window__header">
                <img src="icon.png" alt="icon" />
                <span style={{ flex: 1 }}>{props.title}</span>
                <div className="inline-flex gap-1">
                    <IconBrowserMinus size={20} />
                    <IconX size={20} />
                </div>
            </div>
            <div className="p-2 size-full bg-(--bg-color)">{props.children}</div>
        </div>
    );
}
