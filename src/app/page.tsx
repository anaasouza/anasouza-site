"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText, Linkedin, Globe, Users, Languages, Code, Cpu } from 'lucide-react';
import { translations } from '../translations';
import { Analytics } from "@vercel/analytics/react";

// Type definitions
type Language = 'pt' | 'en' | 'fr';

const LandingPage = () => {
  const [language, setLanguage] = useState<Language>('pt');
  const t = translations[language as keyof typeof translations];

  const icons = {
    cv: <Code className="w-8 h-8 text-indigo-500" />,
    premium: <Globe className="w-8 h-8 text-indigo-500" />,
    linkedin: <Linkedin className="w-8 h-8 text-indigo-500" />,
    expat: <Users className="w-8 h-8 text-indigo-500" />
  };

  return (
    <div>
      <Analytics />
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <div className="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-2">
            <Languages className="w-5 h-5 text-indigo-400" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-white border border-indigo-500/30 rounded-md p-1 text-sm focus:ring-2 focus:ring-indigo-500"
              style={{
                color: 'white',  // Força a cor do texto
                backgroundColor: '#1f2937', // Fundo escuro para o dropdown                
              }}
            >
              <option value="pt" style={{backgroundColor: 'white', color: 'black'}}>Português</option>
              <option value="en" style={{backgroundColor: 'white', color: 'black'}}>English</option>
              <option value="fr" style={{backgroundColor: 'white', color: 'black'}}>Français</option>
            </select>
            </div> 
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
        <div className="inline-block p-2 rounded-full bg-indigo-500/10 mb-4">
            <Cpu className="w-12 h-12 text-indigo-400 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            {t.name}
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-indigo-200">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 backdrop-blur-lg border border-indigo-500/20 shadow-lg hover:shadow-indigo-500/10 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  {Object.values(icons)[index]}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-200 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-indigo-400">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-indigo-500/20 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.whyChooseUs}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-900/50 hover:bg-gray-700/50 transition-colors">
                  <h3 className="font-semibold text-lg mb-2 text-indigo-400">{benefit.title}</h3>
                  <p className="text-indigo-200">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{t.contact}</h2>
          <p className="text-indigo-200 mb-6">
            {t.contactText}
          </p>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:contato.anasouza@gmail.com" 
              className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors bg-gray-800/50 rounded-lg px-4 py-2 hover:bg-gray-700/50"
            >
              <FileText className="w-5 h-5 mr-2" />
              contato.anasouza@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/souza-anac/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors bg-gray-800/50 rounded-lg px-4 py-2 hover:bg-gray-700/50"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              {t.linkedinProfile}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;