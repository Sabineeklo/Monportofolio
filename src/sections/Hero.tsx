import { ArrowRight } from "lucide-react"
import Button from "../components/Button"

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-[#E6F7FF] to-[#FFFFFF] min-h-screen flex justify-center items-center'>
        <div>
          <Button variant='nofill'>Read more</Button>
          <Button
            variant='nofill'
            size='large'
            border='primary'
            icon={<ArrowRight size={20} />}
            iconPosition='right'
          >
            Read more
          </Button>
          <Button fullWidth disabled>
            Read more
          </Button>
          <Button
            icon={<ArrowRight className='w-5 h-5' />}
            iconPosition='right'
          >
            Read more
          </Button>
        </div>
      </div>
  )
}

export default Hero