import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { localizeHref } from '@/lib/localization'
import { cn } from '@/lib/utils'
import type { Attribute } from '@turbostrapi/backend'
import Link from 'next/link'

import * as React from 'react'

export interface LinkCardsSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  section: Attribute.GetDynamicZoneValue<
    Attribute.DynamicZone<['sections.link-cards']>
  >[number]
  locale: string
}

const LinkCardsSection = React.forwardRef<
  HTMLDivElement,
  LinkCardsSectionProps
>(({ className, section, locale, ...props }, ref) => (
  <div
    className={cn(
      'z-20 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-8',
      className,
    )}
    ref={ref}
    {...props}
  >
    {section.cards?.map((card) => (
      <Card key={card.id}>
        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
        </CardHeader>
        <CardContent>{card.description}</CardContent>
        <CardFooter>
          <Link href={localizeHref(card.url, locale)} target={card.target}>
            -&gt;
          </Link>
        </CardFooter>
      </Card>
    ))}
  </div>
))

LinkCardsSection.displayName = 'Link Cards'

export { LinkCardsSection }
