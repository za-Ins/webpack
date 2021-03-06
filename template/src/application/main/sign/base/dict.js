let dict = {
  '中国税收居民': `中国税收居民是指在中国境内有住所，或者无住所而在境内居住满一年的个人。
                在中国境内有住所是指因户籍、家庭、经济利益关系而在中国境内习惯性居住。
                在境内居住满一年，是指在一个纳税年度中在中国境内居住365日。
                临时离境的，不扣减日数。
                临时离境，是指在一个纳税年度中一次不超过30日或者多次累计不超过90日的离境。`
}

// 将字典中的各项的值中的换行符去掉
export default Object.keys(dict).reduce((pub, key) => {
  pub[key] = dict[key].replace(/\s+/g, '')
  return pub
}, {})
