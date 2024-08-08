import Home from '@/app/(afterLogin)/home/page'

type PhotoProps = {
    params: {
        username: string,
        id: string,
        photoId: string
    }
}

const page = ({ params }: PhotoProps) => {
  return (
    <Home />
  )
}

export default page