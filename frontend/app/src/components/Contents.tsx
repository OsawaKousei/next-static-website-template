export default function Contents() {
  return (
    <section id="contents" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              提供ソリューション
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              AI技術を活用した実用的なソリューションで、お客様のビジネス課題を解決します
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">レポート自動化ツール</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                データ分析からレポート生成まで自動化し、意思決定プロセスを効率化するWebアプリケーション。
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  データ可視化・分析
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  AI駆動レポート生成
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  カスタムダッシュボード
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                  開発中
                </span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">モバイルアプリ開発</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                機械学習、画像認識、自然言語処理を統合したモバイルアプリケーションの設計・開発。
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  iOS/Android/Web対応
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  リアルタイム画像認識
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  パーソナライゼーション
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">カスタムソリューション</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                最新技術を活用したカスタムシステム、チャットボットの構築。
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  企業向けチャットボット
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  文書自動生成・要約
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  API統合サポート
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
