
export default function Promocode() {
  return (
    <div className='mt-5 bg-white px-5 py-3 flex items-center justify-between rounded-md'>
        <form onSubmit={e => e.preventDefault()} className='flex items-center'>
            <input type="text" className='h-10 rounded-l border border-[f0f0f0] px-3 text-sm' placeholder="Промокод" />
            <button className='bg-orange-500 h-10 w-10 flex items-center justify-center rounded-r'>
                <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M16.6875 7.46641L2.60474 1.70992C2.01145 1.46739 1.34119 1.57408 0.855567 1.98823C0.369941 2.40244 0.166828 3.04066 0.325555 3.65378L1.57905 8.49621H7.7163C7.99871 8.49621 8.2277 8.72175 8.2277 8.99999C8.2277 9.27819 7.99874 9.50377 7.7163 9.50377H1.57905L0.325555 14.3462C0.166828 14.9593 0.369907 15.5975 0.855567 16.0117C1.34218 16.4267 2.01251 16.5321 2.60477 16.29L16.6875 10.5336C17.3287 10.2715 17.727 9.68384 17.727 8.99999C17.727 8.31613 17.3287 7.72846 16.6875 7.46641Z" fill="white"></path></g><defs><clipPath id="clip0_4898_4078"><rect width="17.4545" height="17.4545" fill="white" transform="translate(0.272461 0.272705)"></rect></clipPath></defs></svg>
                </span>
            </button>
        </form>
        <h3 className='font-semibold text-orange-500 tracking-wide'>
            Итого:  1296  ₽
        </h3>
    </div>
  )
}
