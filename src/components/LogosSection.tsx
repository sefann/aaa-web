import Image from 'next/image'

const logos = [
  '4bhospital.svg',
  'atoz.svg',
  'crf1.svg',
  'dangote.svg',
  'intavalto.svg',
  'intavaltoluxe.svg',
  'mamamia.svg',
  'pathmark.svg',
  'ssbl.svg',
  'unibuildro.svg',
  'vgenergy.svg',
]

export default function LogosSection() {
  return (
    <section 
      className="relative py-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/partner.png"
          alt="Partners Background"
          fill
          className="object-cover w-full h-full"
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center',
            width: '100%',
            height: '100%'
          }}
        />
        {/* Overlay with #4B3A34 color */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(75, 58, 52, 0.6)' }}
        ></div>
      </div>
      
      {/* Logos Content */}
      <div className="container-custom relative z-10">
        <div className="overflow-hidden">
          <div className="flex gap-4 items-center animate-tectonic">
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex items-center justify-center flex-shrink-0"
                style={{ height: '140px', width: '240px' }}
              >
                <Image
                  src={`/logos/${logo}`}
                  alt={logo.replace('.svg', '').replace(/([A-Z])/g, ' $1').trim()}
                  width={240}
                  height={140}
                  className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

