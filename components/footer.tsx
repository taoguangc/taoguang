export default function footer() {
  return (
    <footer className="bg-black pt-24 text-white">
      <div className="container mx-auto flex flex-col-reverse justify-between gap-16 px-4 pb-32 md:flex-row lg:px-8">
        <div className="pb-16 leading-snug tracking-wider text-neutral-300 hover:text-white hover:underline hover:underline-offset-4 md:w-1/2 lg:w-1/3 lg:leading-normal">
          <a href="mailto: taoguangc@gmail.com">联系我们</a>
        </div>
        <div className="text-xl font-light leading-snug md:w-1/2 lg:w-2/3 lg:text-4xl lg:leading-normal">
          <p>
            我们致力于突破界限和拥抱创新。我们的团队不断探索新技术、想法和策略，为您提供尖端的解决方案，带来竞争优势。
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-12">
        <div className="container mx-auto flex flex-row justify-between px-4 lg:px-8">
          <div>
            <h6>© {new Date().getFullYear()} EMPTYAREA</h6>
          </div>
          <div>
            <a id="totop" href="#" className="flex flex-row items-center">
              返回顶部&nbsp;
              <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
