import React from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';

const Testimonial = ({ data }) => {
  const sectionData = data.testimonial.nodes[0].frontmatter;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaLongArrowAltRight className="testimonial-slick-next" />,
    prevArrow: <FaLongArrowAltLeft className="testimonial-prev-arrow" />,
  };

  return (
    <div className='container testimonial'>
      <div className="text-center py-[60px]">
        <h2 className='text-[40px] leading-[60px] font-semibold text-[#363848]'>{sectionData.title}</h2>

        <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>{sectionData.subTitle}</p>
      </div>
      <div className="">
        <Slider {...settings}>
          {sectionData.testimonial.map(items => <div className="">
            <div className="flex flex-col lg:flex-row gap-[62px]">
              <div className="relative lg:w-[30%] w-[80%] mx-auto">
                <img className='w-full' src={items.image} alt="" srcset="" />
                <FaQuoteLeft className='absolute top-0 left-0 w-[68px] h-[53px]' />
              </div>
              <div className="lg:w-[70%] w-full">
                <div className="flex items-center justify-between">
                  <div className="">
                    <h4 className='text-[20px] leading-[30px] font-semibold text-[#363848]'>{items.name}</h4>
                    <p className='text-[16px] leading-[22px] text-[#3D3D3D] font-normal'>{items.title}</p>
                  </div>
                  <div className="flex items-center">
                    <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                    <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                    <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                    <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                    <FaStar className='text-[#FF8412] text-[16px] mr-[6px]' />
                    <FaStar className='text-[#D8D8D8] text-[16px] mr-[12px]' />
                    <h2 className='text-[16px] leading-[22px] font-bold text-[#000000]'>{items.rating}</h2>
                  </div>
                </div>
                <div className="my-[30px]">
                  <p>
                    {items.details}
                  </p>
                </div>
                <div className="flex justify-end w-full">
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="/images/avatar1.png" alt='' />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="/images/avatar2.png" alt='' />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="/images/avater3.png" alt='' />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="/images/avatar4.png" alt='' />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;