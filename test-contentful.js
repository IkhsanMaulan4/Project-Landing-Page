import pkg from 'contentful';
const { createClient } = pkg;

const client = createClient({
  space: 'nx8lkaixvcoz',
  accessToken: 'pUrA3dy5UsaMF-eE7GIwesxtJQZZoGms73UQg2tn08Y'
});

console.log('🔍 Testing Contentful Connection...\n');

async function testContentful() {
  try {
    console.log('1️⃣ Fetching all content types...');
    const contentTypes = await client.getContentTypes();
    console.log('✅ Content Types found:');
    contentTypes.items.forEach(ct => {
      console.log(`   - ${ct.sys.id}: ${ct.name}`);
    });

    console.log('\n2️⃣ Fetching entries with content_type="nasiPadang"...');
    const response = await client.getEntries({
      content_type: 'nasiPadang'
    });

    console.log(`✅ Found ${response.items.length} entries\n`);

    if (response.items.length === 0) {
      console.log('⚠️  NO ENTRIES FOUND!');
      console.log('   Kemungkinan masalah:');
      console.log('   1. Content type ID salah (bukan "nasiPadang")');
      console.log('   2. Belum ada entry yang di-publish');
      console.log('   3. Access token tidak punya akses\n');
    } else {
      console.log('📦 Data struktur:');
      response.items.forEach((item, index) => {
        console.log(`\n--- Entry ${index + 1} ---`);
        console.log('ID:', item.sys.id);
        console.log('Fields:', Object.keys(item.fields));
        console.log('Data:', JSON.stringify(item.fields, null, 2));
      });
    }

  } catch (error) {
    console.error('❌ ERROR:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
  }
}

testContentful();
