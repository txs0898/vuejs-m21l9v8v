<template>
	<div>
		<button @click="this.dec">
          -
    </button>
		<span>{{count}}</span>
		<button @click="this.inc">
          +
    </button>
	</div>
</template>

<script>
	export default {
		tag: 'my-counter',
		name: 'MyCounter',
		data() {
			return { count: 0 }
		},
		methods: {
			inc: function() {
				this.count++;
			},
			dec: function() {
				this.count--;
			}
		}
	};
</script>