"use client"

import debounce from 'lodash.debounce'
import Input from "@/components/common/input"
import { cx } from "class-variance-authority"
import { Search } from "lucide-react"
import Link from "next/link"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"

export default function PageFilters({ tags }: { tags: string[] }) {
  const [searchValue, setSearchValue] = useState("")

  const searchTag = useSearchParams().get("tag")
  const path = usePathname()
  const router = useRouter()

  const onSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return setSearchValue("")

    debounce(() => setSearchValue(event.target.value), 1500)()
    return
  }, [])

  const memorizedTags = useMemo(() => tags, [path])

  useEffect(() => {
    if (searchValue !== "") {
      return router.push(`${path}?search=${searchValue}`)
    }

    router.push(path)
  }, [searchValue])

  return (
    <section id="section-filters" className="flex flex-col gap-4 col-span-1 w-full h-full">
      <Input full onChange={onSearch} placeholder="Search" sufix={<Search className="text-app-text-alter" size={20} />} />

      <ul className="flex items-center flex-wrap gap-3">
        {memorizedTags.map((tag, index) => (
          <li
            className={cx(
              "w-fit cursor-pointer transition-all bg-app-text bg-opacity-0 border border-app-text text-app-text px-3 h-10 rounded flex items-center justify-center hover:bg-opacity-10",
              searchTag === tag && "bg-opacity-100 text-app-bg hover:bg-opacity-75 border-none"
            )
            }
            key={index}
          >
            <Link href={searchTag === tag ? `${path}` : `${path}?tag=${tag}`}>#{tag}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}