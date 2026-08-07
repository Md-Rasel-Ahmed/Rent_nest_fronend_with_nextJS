'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        {/* Warning Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-8 w-8" />
        </div>

        {/* Heading & Description */}
        <h2 className="text-2xl font-bold tracking-tight">Something went wrong!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected error occurred. You can try recovering or return to the homepage.
        </p>

        {/* Error Digest (if available) */}
        {error.digest && (
          <p className="mt-2 rounded bg-muted p-1 text-xs font-mono text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => reset()}
            className="w-full sm:w-auto"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try again
          </Button>

          <Button
            
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link className='flex gap-1' href="/">
              <Home className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}