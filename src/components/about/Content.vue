<template>
    <section class="px-4 py-8">
        <!-- Max-width container -->
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap items-center">
                <!-- Column 1: 60% width -->
                <div class="w-full lg:w-3/5 mb-8 lg:mb-0 lg:pr-8">
                    <h2 class="text-2xl font-semibold mb-4">About Bancassurance</h2>
                    <p class="text-base mb-4">
                        NBK Bancassurance Intermediary Limited, was established in 2009. It is a fully-fledged
                        subsidiary of National Bank of Kenya Limited, established to meet the insurance needs of our
                        customers and the bank. NBK Bancassurance Intermediary is regulated by the Insurance Regulatory
                        Authority. We have partnered with major insurance companies in Kenya to provide you with
                        competitive products and high standards of service.
                    </p>

                    <h3 class="text-xl font-bold mt-12 mb-4">Why NBK Bancassurance Intermediary Ltd (Not Insurance
                        Agency)</h3>
                    <ul class="list-disc list-inside space-y-2 pl-4 text-base">
                        <li>Convenience of buying insurance through a trusted intermediary</li>
                        <li>One stop shop for all your insurance and banking needs</li>
                        <li>Risk advisory on suitable insurance coverage based on your needs</li>
                        <li>Insurance claims support and guidance</li>
                    </ul>
                </div>

                <!-- Column 2: 40% width -->
                <div class="w-full lg:w-2/5 bg-[#3C251F] text-white p-8">
                    <h3 class="text-xl font-bold mb-4">Interested in About Bancassurance or have a question?</h3>
                    <form action="#" method="post">
                        <div class="mb-2">
                            <label for="full-name" class="block text-sm  mb-2">Full Name</label>
                            <input type="text" id="full-name" name="full-name" placeholder="Enter your name"
                                class="w-full p-2 mb-2 border border-white  bg-[#3C251F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>

                        <div class="mb-2">
                            <label for="phone-number" class="block text-sm  mb-2">Phone Number</label>
                            <input type="tel" id="phone-number" name="phone-number" placeholder="070000000"
                                class="w-full p-2 mb-2 border border-white  bg-[#3C251F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>

                        <div class="mb-2">
                            <label for="email" class="block text-sm  mb-2">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email"
                                class="w-full p-2 mb-2 border border-white bg-[#3C251F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>

                        <div class="mb-2">
                            <label for="message" class="block text-sm  mb-2">Message</label>
                            <textarea id="message" name="message" placeholder="Enter your message" rows="4"
                                class="w-full p-2 mb-2 border border-white  bg-[#3C251F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>

                        <button type="submit"
                            class="w-full bg-[#FFAF2E] text-[#3C251F] py-2 px-4 flex items-center justify-between  focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <span class="font-bold">Send My Request</span>
                            <!-- SVG Icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>

                        </button>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>