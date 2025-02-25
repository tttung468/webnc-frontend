export { default } from '@/features/home'
import courses from '@/mocks/data/courses.json'

export async function getStaticProps() {
  return {
    props: {
      courses: courses.slice(0, 10)
    },
    revalidate: 3600
  }
}
