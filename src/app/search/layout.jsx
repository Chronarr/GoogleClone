import SearchHeader from '@/components/SearchHeader'
import '../globals.css'

export const metadata = {
    title: 'Google Clone',
    description: 'Created by Chronarr',
}

export default function SearchLayout({ children }) {
    return (
        <div>
            <SearchHeader />

            {children}
        </div>
    )
}
