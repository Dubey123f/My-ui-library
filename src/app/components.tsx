// pages/components.tsx
import Link from 'next/link';
import Navbar from '../components/Navbar';

const ComponentsPage: React.FC = () => {
    const components = [
        { name: 'Button', path: '/components/ui/button' },
        { name: 'Card', path: '/components/card' },
        { name: 'Modal', path: '/components/modal' },
        // Add more components as needed
    ];

    return (
        <div>
            <Navbar />
            <h2>Components</h2>
            <ul>
                {components.map((component) => (
                    <li key={component.name}>
                        <Link href={component.path}>{component.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentsPage;