Add maven dependency:

```xml
	 <dependency>
        <groupId>org.apache.kafka</groupId>
        <artifactId>kafka_2.11</artifactId>
        <version>0.11.0.0</version>
    </dependency>
    
```


Java Producer API：
```java
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("acks", "all");//ack方式，all，会等所有的commit最慢的方式
props.put("retries ", 1);//失败是否重试，设置1会有可能产生重复数据
props.put("buffer.memory", 33554432);//整个producer可以用于buffer的内存大小
props.put("linger.ms", 1);  //等多久，如果buffer没满，比如设为1，即消息发送会多1ms的延迟，如果buffer没满
props.put("key.serializer","org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer","org.apache.kafka.common.serialization.StringSerializer");
 
Producer<String, String> producer = new KafkaProducer<>(props);
for(int i = 0; i < 100; i++)
    producer.send(new ProducerRecord<String, String>("my-topic", Integer.toString(i), Integer.toString(i)));
producer.close();
```
  
Java  Consumer API：

```java
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("group.id", "test");//不同ID 可以同时订阅消息
props.put("enable.auto.commit", "false");//自动commit
props.put("auto.commit.interval.ms", "1000");//定时commit的周期
props.put("session.timeout.ms", "30000");//consumer活性超时时间
props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
consumer.subscribe(Arrays.asList("my-topic"));//订阅TOPIC
try {
    while(RUNNING) {//轮询
        ConsumerRecords<String, String> records =consumer.poll(Long.MAX_VALUE);//超时等待时间
        for (TopicPartition partition : records.partitions()) {
            List<ConsumerRecord<String, String>> partitionRecords = records.records(partition);
            for (ConsumerRecord<String, String> record : partitionRecords) {

                System.out.println(record.offset() + ": " + record.value());
            }
            consumer.commitSync();//同步
        }
    }
} finally {
  consumer.close();
}
```

Manual Offset Control
```java
 Properties props = new Properties();
     props.put("bootstrap.servers", "localhost:9092");
     props.put("group.id", "test");
     props.put("enable.auto.commit", "false"); //关闭自动commit
     props.put("session.timeout.ms", "30000");
     props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
     props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
     KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
     consumer.subscribe(Arrays.asList("foo", "bar"));
     final int minBatchSize = 200;
     List<ConsumerRecord<String, String>> buffer = new ArrayList<>();
     while (true) {
         ConsumerRecords<String, String> records = consumer.poll(100);
         for (ConsumerRecord<String, String> record : records) {
             buffer.add(record);
         }
         if (buffer.size() >= minBatchSize) {
             insertIntoDb(buffer); 
             consumer.commitSync(); //批量完成写入后，手工sync offset
             buffer.clear();
         }
     }
```
