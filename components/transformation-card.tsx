import { ArrowLeftRight } from "lucide-react"

interface TransformationCardProps {
  beforeSrc?: string
  afterSrc?: string
  name: string
  age: number
  objective: string
  testimonial: string
  result: string
}

export function TransformationCard({
  beforeSrc,
  afterSrc,
  name,
  age,
  objective,
  testimonial,
  result,
}: TransformationCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Área Antes/Depois */}
      <div className="relative h-[180px] md:h-[260px]">
        <div className="flex h-full">
          {/* Lado Antes */}
          <div className="flex-1 relative">
            {beforeSrc ? (
              <img
                src={beforeSrc || "/placeholder.svg"}
                alt={`${name} - Antes`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200"></div>
            )}
            <div className="absolute top-3 left-3 bg-[#00D4AA] text-white px-3 py-1 rounded-full text-xs font-medium">
              Antes
            </div>
          </div>

          {/* Divisória central */}
          <div className="w-px bg-teal-200 relative"></div>

          {/* Lado Depois */}
          <div className="flex-1 relative">
            {afterSrc ? (
              <img
                src={afterSrc || "/placeholder.svg"}
                alt={`${name} - Depois`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200"></div>
            )}
            <div className="absolute top-3 right-3 bg-[#00D4AA] text-white px-3 py-1 rounded-full text-xs font-medium">
              Depois
            </div>
          </div>
        </div>

        {/* Botão circular central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-9 h-9 bg-white rounded-full shadow-md border border-teal-100 flex items-center justify-center">
            <ArrowLeftRight className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 md:p-8">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-gray-900">
            {name}, {age} anos
          </h3>
        </div>

        <div className="mb-4">
          <span className="text-sm text-gray-600">Objetivo: </span>
          <span className="text-sm text-[#00D4AA] font-medium">{objective}</span>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-700 italic">"{testimonial}"</p>
        </div>

        <div>
          <span className="text-sm font-bold text-[#00D4AA]">Resultado: </span>
          <span className="text-sm text-gray-700">{result}</span>
        </div>
      </div>
    </div>
  )
}
