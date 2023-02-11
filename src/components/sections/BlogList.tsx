import React, {useEffect, useState} from 'react'

import {IBlogList, IBlogListItem} from '../../page/types'
import BlogListItem from '../shared/BlogListItem'

const BlogList = ({blogList}: IBlogList) => {
  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState('')
  useEffect(() => {
    const categories = blogList?.map((item: IBlogListItem) => item.categories?.title)

    let list = categories?.filter((element, index) => {
      return categories?.indexOf(element) === index
    })
    setCategories(list as any)

    let listBlog = list?.reduce((result, category) => {
      let filteredArray = blogList?.filter((obj) => obj.categories?.title === category)
      //   @ts-ignore
      result.push({category: category, blogList: filteredArray})
      return result
    }, [])

    setPosts(
      listBlog?.sort((a: any, b: any) => {
        if (a.category === category) {
          return -1
        } else if (b.category === category) {
          return 1
        } else {
          return 0
        }
      }) as any
    )
  }, [blogList, category])

  const handleChangeCategory = (value: string) => {
    if (value == category) {
      setCategory('')
    } else {
      setCategory(value)
    }
  }

  return (
    <section className="mx-auto items-center px-8 py-12 xl:container">
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
      <div>
        {posts.map((item: any) => (
          <div key={item.category}>
            <h2 className="pt-12 text-2xl font-bold text-dark">{item.category && item.category}</h2>
            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.blogList &&
                item.blogList.map((item: IBlogListItem) => (
                  <BlogListItem data={item} key={item._id} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogList
