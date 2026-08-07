import Link from 'next/link'
import { Home, FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <FileQuestion className="h-8 w-8 text-primary" />
        </div>

        {/* 404 Text & Heading */}
        <span className="text-4xl font-extrabold text-primary">404</span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Page Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sorry, we couldn’t find the page or resource you were looking for.
        </p>

        {/* Return Home Button */}
        <div className="mt-6 flex justify-center">
          <Button >
            <Link className='flex gap-1' href="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}