import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {useEffect, useState} from 'react'
import {CgArrowLongRight} from 'react-icons/cg'

import {IAllWorkList, IWorkFeature} from '../../page/types'
import {urlForImage} from '../../sanity/lib/sanity.image'
import WorkListItem from '../shared/WorkListItem'

const WorkFeature = ({workCase, description, title, workList}: IWorkFeature) => {
  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState('')
  const router = useRouter()

  useEffect(() => {
    const categories = workList?.map((item: IAllWorkList) => item.categories?.title)

    let list = categories?.filter((element, index) => {
      return categories?.indexOf(element) === index
    })
    setCategories(list as any)

    let listWork = list?.reduce((result, category) => {
      let filteredArray = workList?.filter((obj) => obj.categories?.title === category)
      //   @ts-ignore
      result.push({category: category, workList: filteredArray})
      return result
    }, [])

    setPosts(
      listWork?.sort((a: any, b: any) => {
        if (a.category === category) {
          return -1
        } else if (b.category === category) {
          return 1
        } else {
          return 0
        }
      }) as any
    )
  }, [workList, category])

  const handleChangeCategory = (value: string) => {
    if (value == category) {
      setCategory('')
    } else {
      setCategory(value)
    }
  }

  const image = workCase?.image && urlForImage(workCase?.image as any)?.url()

  return (
    <section className="mx-auto mt-[80px] items-center px-8 py-12 xl:container">
      <div className="flex w-full flex-col md:flex-row">
        <div className="box box-1 flex w-full flex-col pb-6 md:w-1/2 md:pr-4 md:pb-0">
          <h1 className="blinker text-4xl font-semibold tracking-wider text-dark sm:text-5xl lg:text-7xl">
            {title && title}
          </h1>
          <p className="pt-6 text-gray md:text-lg">{description && description}</p>
        </div>
        <div className="box box-2 w-full md:w-1/2 md:pl-4">
          {image && (
            <Image
              priority
              src={image as any}
              width={800}
              height={800}
              className="rounded-lg"
              alt={workCase?.image?.alt || ''}
            />
          )}
          <h2 className="pt-6 text-2xl font-semibold text-dark sm:text-4xl">
            {workCase?.title && workCase?.title}
          </h2>
          <p className="pt-3 text-gray">{workCase?.description && workCase.description}</p>
          <Link
            className="block flex max-w-fit items-center pt-6 pr-12 text-primary hover:text-primary_accent"
            href={
              workCase?.link?.slug && router.locale === 'en'
                ? `${workCase?.link?.slug}`
                : `${workCase?.link?.slug}`
            }
          >
            {router.locale === 'en' ? 'Read the case study' : 'Läs mer om detta kundcase'}
            <span className="pl-2 text-2xl">
              <CgArrowLongRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex flex-wrap">
          {categories &&
            categories.map((item: any) => (
              <button
                className={`${
                  item === category
                    ? 'bg-primary text-white hover:bg-primary_accent'
                    : 'bg-light_gray text-dark hover:bg-primary hover:text-white'
                } mb-2 mr-2 rounded-lg px-6 py-2 transition-colors`}
                key={item}
                onClick={() => handleChangeCategory(item)}
              >
                {item}
              </button>
            ))}
        </div>
        {posts.map((item: any) => (
          <div key={item.category}>
            <h3 className="pt-6 text-xl font-bold text-dark sm:text-2xl">
              {item.category && item.category}
            </h3>
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.workList &&
                item.workList.map((item: IAllWorkList) => (
                  <WorkListItem data={item} key={item._id} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkFeature
