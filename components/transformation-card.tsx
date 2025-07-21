'use client';

import CompareImage from 'react-compare-image';

interface TransformationCardProps {
  name: string;
  age: number;
  objective: string;
  testimonial: string;
  result: string;
  before: string;
  after: string;
}

export function TransformationCard({
  name,
  age,
  objective,
  testimonial,
  result,
  before,
  after,
}: TransformationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden min-w-[300px] w-full max-w-sm mx-auto flex flex-col">
      {/* Container com aspect ratio forçado para uniformizar todas as imagens */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <CompareImage
          leftImage={before}
          rightImage={after}
          sliderLineColor="#00D4AA"
          sliderLineWidth={2}
          handleSize={30}
          className="!h-full !w-full object-cover"
          style={{ height: '100%', width: '100%' }}
        />
      </div>

      {(name || testimonial || result || objective) && (
        <div className="p-4 flex flex-col justify-between flex-1">
          {name && (
            <h3 className="text-lg font-bold">
              {name}, {age} anos
            </h3>
          )}
          {objective && (
            <p className="text-sm text-gray-600">
              Objetivo: <span className="text-emerald-500">{objective}</span>
            </p>
          )}
          {testimonial && (
            <p className="italic text-sm my-2">"{testimonial}"</p>
          )}
          {result && (
            <p className="text-sm font-semibold text-emerald-600">
              Resultado:{' '}
              <span className="text-gray-800 font-normal">{result}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
