import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MoneyView = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.timeText}>12:41</Text>
          <Ionicons name="battery-half-outline" size={20} color="white" />
        </View>
        <View style={styles.headerRight}>
          <Ionicons name="wifi-outline" size={20} color="white" />
          <Text style={styles.dataText}>3.24 KB/S</Text>
          <Ionicons name="cellular-outline" size={20} color="white" />
          <Text style={styles.batteryText}>83%</Text>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Ionicons name="logo-usd" size={36} color="white" />
          <Text style={styles.bannerTitle}>moneyview</Text>
        </View>
        <View style={styles.bannerIcons}>
          <Ionicons name="gift-outline" size={28} color="white" />
          <Ionicons name="menu-outline" size={28} color="white" />
        </View>
      </View>

      {/* Share and Earn Section */}
      <View style={styles.earnSection}>
        <View>
          <Text style={styles.earnText}>Share the app & earn</Text>
          <Text style={styles.earnAmount}>₹50,000+</Text>
          <Text style={styles.earnMonthly}>per month</Text>
          <TouchableOpacity>
            <Text style={styles.referLink}>Refer now</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/EZNLwuNFLobIKpzxWYW5EzAxtcufQtKFHSXfxPssxAendTHnA.jpg' }}
          style={styles.earnImage}
        />
      </View>

      {/* Products Section */}
      <View style={styles.productsSection}>
        <Text style={styles.sectionTitle}>MY PRODUCTS</Text>
        {/* Product 1 */}
        <View style={styles.productCard}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/mpLZYDarUJbPIVWQHmJEJW2dAwDvHzwmFhNWTLLBQkPsb64E.jpg' }}
            style={styles.productIcon}
          />
          <View>
            <Text style={styles.productName}>INSTA LOAN</Text>
            <Text style={styles.productAmount}>₹35,000</Text>
          </View>
          <View>
            <Text style={styles.amountLabel}>Amount:</Text>
            <Text style={styles.amount}>₹2,879</Text>
          </View>
        </View>
        {/* Product 2 */}
        <View style={styles.productCard}>
          <Image
            source={{ uri: 'https://storage.googleapis.com/a1aa/image/YISSzgylWqK4F1H2biyxMHJBtwCkkAeHshxeUo4IxwbvupjTA.jpg' }}
            style={styles.productIcon}
          />
          <View>
            <Text style={styles.productName}>CREDIT TRACKER</Text>
            <Text style={styles.creditScore}>766 / 900</Text>
          </View>
          <Text style={styles.lastUpdated}>Last updated: 01 Oct 2024</Text>
        </View>
      </View>

      {/* Explore More Section */}
      <View style={styles.exploreSection}>
        <View style={styles.exploreDivider}></View>
        <Text style={styles.exploreText}>EXPLORE MORE</Text>
        <View style={styles.exploreDivider}></View>
      </View>

      {/* Investment Options */}
      <View style={styles.investSection}>
        <Text style={styles.sectionTitle}>INVEST</Text>
        <View style={styles.grid}>
          <View style={styles.investCard}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/fQljRuXJ1bUCC6y53ByEPaWI5LdcK5W62Baup4beS9qyupjTA.jpg' }}
              style={styles.investIcon}
            />
            <View>
              <Text style={styles.investTitle}>Invest Salary</Text>
              <Text style={styles.investDesc}>In Fixed deposits & get up to 9.10% p.a.</Text>
            </View>
          </View>
          <View style={[styles.investCard, styles.yellowCard]}>
            <Image
              source={{ uri: 'https://storage.googleapis.com/a1aa/image/DK1u0Vblqra0EJGwQiP1eQmXwp4SeZWMbTAPd1WRBxY2upjTA.jpg' }}
              style={styles.investIcon}
            />
            <View>
              <Text style={styles.investTitle}>₹1,000 Free Gold</Text>
              <Text style={styles.investDesc}>Start as low as ₹10</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#065f46',
    padding: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: 'white',
    fontSize: 18,
    marginRight: 5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataText: {
    color: 'white',
    fontSize: 12,
    marginHorizontal: 5,
  },
  batteryText: {
    color: 'white',
    fontSize: 12,
  },
  banner: {
    backgroundColor: '#065f46',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bannerIcons: {
    flexDirection: 'row',
  },
  earnSection: {
    backgroundColor: '#6b21a8',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  earnText: {
    color: 'white',
    fontSize: 18,
  },
  earnAmount: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  earnMonthly: {
    color: 'white',
    fontSize: 16,
  },
  referLink: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  earnImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  productsSection: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    color: '#4b5563',
    fontSize: 18,
    fontWeight: '600',
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  productIcon: {
    width: 40,
    height: 40,
  },
  productName: {
    color: '#065f46',
    fontSize: 16,
    fontWeight: '600',
  },
  productAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  amountLabel: {
    color: '#6b7280',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  creditScore: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lastUpdated: {
    color: '#6b7280',
    fontSize: 12,
  },
  exploreSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  
  exploreDivider: {
    height: 1, // Divider height
    backgroundColor: '#ccc', // Divider color
    flex: 1, // Stretch the divider to fill the space
    marginHorizontal: 10,
  },
  exploreText: {
    color: '#666', // Text color
    fontSize: 16, // Font size
    fontWeight: '600', // Font weight
  },
  investSection: {
    marginHorizontal: 20, // Horizontal margin for spacing
    marginTop: 20, // Top margin
  },
  
  grid: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-between', // Distribute items evenly
    flexWrap: 'wrap', // Wrap items to the next line if needed
  },
  investCard: {
    backgroundColor: '#fff', // Background color
    borderRadius: 10, // Rounded corners
    padding: 15, // Padding inside the card
    marginBottom: 15, // Space between cards
    width: '48%', // Make cards take 48% of the width to fit two in a row
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  yellowCard: {
    backgroundColor: '#fff3cd', // Yellow background for this card
  },
  investIcon: {
    width: 40, // Icon width
    height: 40, // Icon height
    marginRight: 10, // Space between the icon and text
  },
  investTitle: {
    color: '#2d7a46', // Green color for title
    fontWeight: 'bold', // Bold text
    fontSize: 16, // Font size
  },
  investDesc: {
    color: '#666', // Description color
    fontSize: 14, // Font size
    marginTop: 4, // Space above description
  },
})

export default MoneyView