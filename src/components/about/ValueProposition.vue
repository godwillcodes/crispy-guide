<template>
    <section class="py-12 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Card 1: Our Mission -->
                <div class="bg-[#F5F0F0] text-[#3C251F] border border-gray-200 rounded-lg flex flex-col p-6 items-center"
                    data-aos="fade-up" data-aos-delay="100">
                    <div class="flex-shrink-0 mb-4">
                        <!-- SVG Icon -->
                        <img src="/assets/images/Layer_1(1).svg" alt="Mission Icon" class="w-16 h-16">
                    </div>
                    <h3 class="text-lg font-bold mb-2 text-center">Our Mission</h3>
                    <p class="text-sm text-[#3C251F] text-center">
                        We are dedicated to care and skill in providing competitive insurance and risk management
                        solutions to our customers, providing attractive opportunities to our employees, and improving
                        our stakeholders’ value.
                    </p>
                </div>

                <!-- Card 2: Our Vision -->
                <div class="bg-[#F5F0F0] text-[#3C251F] border border-gray-200 rounded-lg flex flex-col p-6 items-center"
                    data-aos="fade-up" data-aos-delay="200">
                    <div class="flex-shrink-0 mb-4">
                        <!-- SVG Icon -->
                        <img src="/assets/images/Layer_1(2).svg" alt="Vision Icon" class="w-16 h-16">
                    </div>
                    <h3 class="text-lg font-bold mb-2 text-center">Our Vision</h3>
                    <p class="text-sm text-[#3C251F] text-center">
                        To be the insurance intermediary of choice for our customers.
                    </p>
                </div>

                <!-- Card 3: Our Purpose -->
                <div class="bg-[#F5F0F0] text-[#3C251F] border border-gray-200 rounded-lg flex flex-col p-6 items-center"
                    data-aos="fade-up" data-aos-delay="300">
                    <div class="flex-shrink-0 mb-4">
                        <!-- SVG Icon -->
                        <img src="/assets/images/Layer_1(3).svg" alt="Purpose Icon" class="w-16 h-16">
                    </div>
                    <h3 class="text-lg font-bold mb-2 text-center">Our Purpose</h3>
                    <p class="text-sm text-[#3C251F] text-center">
                        We believe that insurance is one of the best ways of protecting your wealth. Our solutions
                        provide our customers with an opportunity to manage and mitigate against any perils.
                    </p>
                </div>

                <!-- Card 4: Our Customer Promise -->
                <div class="bg-[#F5F0F0] text-[#3C251F] border border-gray-200 rounded-lg flex flex-col p-6 items-center"
                    data-aos="fade-up" data-aos-delay="400">
                    <div class="flex-shrink-0 mb-4">
                        <!-- SVG Icon -->
                        <img src="/assets/images/Layer_1(4).svg" alt="Customer Promise Icon" class="w-16 h-16">
                    </div>
                    <h3 class="text-lg font-bold mb-2 text-center">Our Customer Promise</h3>
                    <p class="text-sm text-[#3C251F] text-center">
                        To put our customers firmly at the forefront of everything we do and deliver on our promises.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    mounted() {
        AOS.init({
            duration: 600, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
            once: true, // Whether animation should happen only once
        });
    }
}
</script>

<style scoped>
/* Scoped styles if needed */
</style>