'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

export function HomepageComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ファミリーケア翔</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#services" className="text-gray-600 hover:text-primary">サービス</Link></li>
              <li><Link href="#about" className="text-gray-600 hover:text-primary">会社概要</Link></li>
              <li><Link href="#contact" className="text-gray-600 hover:text-primary">お問い合わせ</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
            src="/top.jpeg?height=500&width=1000"
            alt="ケアスタッフが利用者を笑顔でサポートしているイメージ写真"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">ファミリーケア翔</h2>
            <p className="text-xl">あなたの生活をサポートする、信頼できる訪問介護サービス</p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">事業紹介</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-black text-2xl font-semibold mb-4">訪問介護とは</h3>
              <p className="text-gray-600 mb-4">
                訪問介護は、ご自宅で生活される方々に対して、日常生活のサポートを提供するサービスです。
                生活支援サービス（掃除、買い物、調理など）と身体介護サービス（入浴、食事、排泄介助など）を
                提供しています。
              </p>
            </div>
            <div>
              <h3 className="text-black text-2xl font-semibold mb-4">私たちのミッション</h3>
              <p className="text-gray-600">
                地域に根ざし、一人ひとりに寄り添ったケアを提供することを目的としています。
                皆様の生活の質の向上と、自立した生活のサポートに全力を尽くします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">サービスの詳細</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-black text-2xl font-semibold mb-4">サービス内容</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>身体介護（入浴、食事、排泄介助など）</li>
                <li>生活援助（掃除、洗濯、買い物、調理など）</li>
                <li>認知症ケア</li>
                <li>医療対応が必要なケースの支援</li>
              </ul>
            </div>
            <div>
              <h3 className="text-black text-2xl font-semibold mb-4">料金プラン</h3>
              <p className="text-gray-600 mb-4">
                公的介護保険が適用されるサービスの料金体系や、自費サービスの料金などについては、
                お問い合わせいただくか、ケアマネージャーにご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Flow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">ご利用までの流れ</h2>
          <div className="max-w-2xl mx-auto">
            <ol className="relative border-l border-gray-200">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white">
                  1
                </span>
                <h3 className="text-black font-semibold text-lg mb-1">お問い合わせ</h3>
                <p className="text-gray-600">お電話またはお問い合わせフォームよりご連絡ください。</p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white">
                  2
                </span>
                <h3 className="text-black font-semibold text-lg mb-1">ご相談・面談</h3>
                <p className="text-gray-600">ご要望やお困りの点をお聞きし、最適なサービスをご提案します。</p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white">
                  3
                </span>
                <h3 className="text-black font-semibold text-lg mb-1">ケアプラン作成</h3>
                <p className="text-gray-600">ご要望に基づいて、具体的なケアプランを作成します。</p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-4 ring-white">
                  4
                </span>
                <h3 className="text-black font-semibold text-lg mb-1">サービス開始</h3>
                <p className="text-gray-600">ケアプランに基づいて、訪問介護サービスを開始します。</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Staff Introduction */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">スタッフ紹介</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-black text-2xl font-semibold mb-4">代表者メッセージ</h3>
              <p className="text-gray-600">
                ファミリーケア翔は、地域の皆様の生活をサポートし、笑顔あふれる日々を過ごしていただくことを
                使命としています。一人ひとりのニーズに寄り添い、心のこもったケアを提供してまいります。
              </p>
            </div>
            <div>
              <h3 className="text-black text-2xl font-semibold mb-4">ケアスタッフ</h3>
              <p className="text-gray-600">
                経験豊富なスタッフや、介護福祉士などの資格を持ったプロフェッショナルが、
                皆様の生活をサポートいたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">よくある質問（FAQ）</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-black text-xl font-semibold mb-2">どのように訪問介護を始めればよいですか？</h3>
              <p className="text-gray-600">
                まずはお電話またはお問い合わせフォームよりご連絡ください。その後、ご相談・面談を行い、
                ケアプランを作成してサービスを開始いたします。
              </p>
            </div>
            <div>
              <h3 className="text-black text-xl font-semibold mb-2">どのような時間帯にサービスを受けられますか？</h3>
              <p className="text-gray-600">
                基本的に24時間対応可能です。ただし、時間帯によっては対応できるスタッフが限られる場合が
                ございますので、詳細についてはお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-black block mb-2 font-medium">お名前</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="email" className="text-black block mb-2 font-medium">メールアドレス</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-md" required />
              </div>
              <div>
                <label htmlFor="message" className="text-black block mb-2 font-medium">お問い合わせ内容</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-md" required></textarea>
              </div>
              <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
                送信
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-black text-3xl font-bold text-center mb-8">会社情報</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-black text-2xl font-semibold mb-4">会社概要</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>会社名:</strong> ファミリーケア翔</li>
                  <li><strong>所在地:</strong> 〒123-4567 東京都○○区××町1-2-3</li>
                  <li><strong>設立年:</strong> 20XX年</li>
                  <li className="flex items-center"><Phone className="w-5 h-5 mr-2" /> 03-1234-5678</li>
                  <li className="flex items-center"><Mail className="w-5 h-5 mr-2" /> info@familycaresho.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-black text-2xl font-semibold mb-4">アクセスマップ</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                      src="/placeholder.svg"
                      alt="アクセスマップ"
                      width={400}
                      height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">ファミリーケア翔</h2>
              <p>あなたの生活をサポートする、信頼できる訪問介護サービス</p>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li><Link href="#services" className="hover:text-primary-light">サービス</Link></li>
                <li><Link href="#about" className="hover:text-primary-light">会社概要</Link></li>
                <li><Link href="#contact" className="hover:text-primary-light">お問い合わせ</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} ファミリーケア翔. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
