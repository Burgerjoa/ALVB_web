export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ALVB</h3>
            <p className="text-gray-400">
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  레퍼런스
                </a>
              </li>
              <li>
                <a href="/quote" className="text-gray-400 hover:text-white transition-colors">
                  온라인 견적
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">문의</h4>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: contact@alvb.com</li>
              <li>전화: 02-1234-5678</li>
              <li>주소: 서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ALVB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
